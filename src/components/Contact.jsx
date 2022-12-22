import React from 'react'

export const Contact = () => {
    return (
        <div className='container mt-5 pt-5 '>
            <h1 className='text-center'>Contact Us</h1>
            <hr />

            <form className='bg-dark text-white p-5 m-5 rounded'>
                <div class="mb-3">
                    <label  class="form-label">First Name</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                    <label  class="form-label">Last Name</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                    <label  class="form-label">Phone</label>
                    <input type="" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label >Description</label>
                    <textarea type="text" class="form-control mt-2" placeholder='Write you message here' rows={10}/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>  
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        



        </div>
    )
}
