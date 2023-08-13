import React from 'react'

const Loading = () => {

    const containerStyle = {
        height: '100vh',
      };
  return (
    <div>
      <div className='container'>
        <div className="d-flex justify-content-center align-items-center" style={containerStyle}>
            
            <div className="spinner-border text-success" role="status">
            </div>
            </div>
        </div>
            

      </div>
    
  )
}

export default Loading
