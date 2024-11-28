import React from 'react';

export default function NotFound() {
  return (
    <div className="text-center" style={{ padding: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      {/* <a href="/" className="btn btn-primary">Go Back to Home</a> */}
      <img src="https://static.vecteezy.com/system/resources/previews/008/255/803/non_2x/page-not-found-error-404-system-updates-uploading-computing-operation-installation-programs-system-maintenance-a-hand-drawn-layout-template-of-a-broken-robot-illustration-vector.jpg" alt="" width={'680px'} />
    </div>
  );
}
