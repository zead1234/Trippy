function Form(props){
    return(
       
                <form>
                     <div className="container">
            <div className="row">
                    <input className="col-12 my-2 rounded" type="text"  placeholder="Name" required />
                    <input className="col-12 my-2 rounded" type="email"  placeholder="Email" required/>
                    <input className="col-12 my-2 rounded" type="text" placeholder="Subject" required />
                    <input className="col-12 my-2 rounded password" type="password" name="" id="" placeholder="Password" required/>
                    <input className="col-12 my-2 rounded password" type="password" name="" id="" placeholder="Repeat your password" required/>
                    <textarea className="col-12 my-2 rounded text " cols="30" rows="5" placeholder="Message"></textarea>
                    <input  className="btn btn-light col-12 my-2" type="button" value={props.value} />
                    </div>
        </div>
    
                </form>
                )
         
}
export default Form;