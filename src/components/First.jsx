import './First.css';

let Name = () => {
    let name = "Hello World";
    return (
        <div className='myDiv'>
            <h1>Sample 1</h1>
            <p>{name}</p>
        </div>
    )
}
let Obj = () => {
    let object = {
        name: "Hello World",
    }
    return (
        <div className='myDiv'>
            <h1>Sample 2</h1>
            <p>{object.name}</p>
        </div>
    )
}
let Data = () => {
    let data = ['We', 'are', 'United']
    return (
        <div className='myDiv'>
            <h1>Sample 3</h1>
            {data.map((v, i) => {
                return (
                    <p>{v}</p>
                )
            })}


        </div>
    )
}
let List = () => {
    let list = [{ name: "Hello World 1" },
    { name: "Hello World 2" },
    { name: "Hello World 3" }]
    return (
        <div className='myDiv'>
            <h1>Sample 4</h1>
            {list.map((v, i) => {
                return (
                    <p>{v.name}</p>
                )
            })}


        </div>
    )
}
let Complex = () => {
    let complex = [{ company: "XYZ", jobs: ["Javascript", "React"] }, { company: 'ABC', jobs: ['AngularJs', 'Ionic'] }]
    return (
        <div className='myDiv'>
            <h1>Sample 5</h1>
            <table>
                <tr>
                    <th>Company</th>
                    <th>Jobs</th>
                </tr>
                {complex.map((v, i) => {
                    return (
                        <tr>
                            <td>{v.company}</td>
                            <td>{v.jobs.join(" , ")}</td>
                        </tr>
                    )
                })}
            </table>

        </div>
    )
}

let FirstQ=()=>{
    return(
        <div className='myDiv'>
            <h1 className='heading'>First Question</h1>
        <Name />
        <Obj />
        <Data />
        <List />
        <Complex />
        </div>
    )
}

export default FirstQ