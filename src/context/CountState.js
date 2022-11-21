import ContextFile from "./context";
 const CountState = (props)=>{
    return (
        <ContextFile.Provider value={{name:"Deepak"}}>
           {props.children}
        </ContextFile.Provider>
    )
}
export {CountState}