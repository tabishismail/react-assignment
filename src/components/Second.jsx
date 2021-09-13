import './First.css';

let SecondQ=()=>{
    return(
        <div>
            <div>
                <h1 className='heading'>Second Question</h1>

            <h2>Single Import</h2>
            <p>
                In single import we only import single component at the time, and one by one import show too much code, for example:
                we create more then one component which we want to use in other file so we have to export that one by one and import in other file one by one its little bit long process but easy
            </p>
            </div>
            <div>
            <h2>Multi Import</h2>
            <p>
                In multi import we can import multiple component at the same time in the form of object, for Example:
                we create more then one component which we want to use in other file so we have to export them in the form of object and import in other file in the form of object its easy and short the code in one line</p>
            </div>
        </div>
    )
}

export default SecondQ