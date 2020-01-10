// Name: Tommy Cao
// Date: 6/23/19
// Title: React-pagination
// Description:  Use React to implement a custom pagination to get a certain number of fetched posts per page. 
//               It also uses useState and useEffect hooks as well.

import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <li key={post.id} className='list-group-item'>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
