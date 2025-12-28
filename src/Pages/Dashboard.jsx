import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Dashboard = () => {
const [urls, setUrls] = useState([]); // initial empty array


useEffect(() => {
const fetchUrls = async () => {
try {
const res = await axios.get('/api/dashboard'); // backend API
setUrls(res.data?.data || []); // safe fallback
} catch (err) {
console.error('Error fetching URLs', err);
setUrls([]); // ensure urls is always an array
}
};


fetchUrls();
}, []);


return (
<div className="container mx-auto p-6">
<h1 className="text-3xl font-bold mb-6">My URL Dashboard</h1>


<div className="overflow-x-auto">
<table className="min-w-full bg-white border rounded-lg shadow">
<thead>
<tr className="bg-blue-100 text-left">
<th className="py-2 px-4">Long URL</th>
<th className="py-2 px-4">Short URL</th>
<th className="py-2 px-4">Visits</th>
<th className="py-2 px-4">Created At</th>
<th className="py-2 px-4">Actions</th>
</tr>
</thead>
<tbody>
{urls.length > 0 ? (
urls.map(url => (
<tr key={url._id} className="border-t hover:bg-gray-50">
<td className="py-2 px-4 break-all">{url.longUrl}</td>
<td className="py-2 px-4 text-blue-600 hover:underline">{`https://yourdomain/${url.shortCode}`}</td>
<td className="py-2 px-4 text-center">{url.totalVisit}</td>
<td className="py-2 px-4">{new Date(url.createdAt).toLocaleDateString()}</td>
<td className="py-2 px-4">
<button className="bg-red-500 text-white px-3 py-1 rounded mr-2 hover:bg-red-600">Delete</button>
<button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Copy</button>
</td>
</tr>
))
) : (
<tr>
<td colSpan={5} className="text-center py-4">No URLs found</td>
</tr>
)}
</tbody>
</table>
</div>
</div>
);
};


export default Dashboard;