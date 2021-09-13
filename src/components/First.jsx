let Name = () => {
    let name = "Hello World";
    return (
        <div>
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
        <div>
            <h1>Sample 2</h1>
            <p>{object.name}</p>
        </div>
    )
}
let Data = () => {
    let data = ['We', 'are', 'United']
    return (
        <div>
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
    let data = ['We', 'are', 'United']
    return (
        <div>
            <h1>Sample 3</h1>
            {data.map((v, i) => {
                return (
                    <p>{v}</p>
                )
            })}


        </div>
    )
}
export {
    Name,
    Obj,
    Data
}