import { Outlet } from "react-router-dom"

const LayoutContanierForm = () => {
  return (
    <div className="w-96 m-auto mt-10">        
        <Outlet />
    </div>
  )
}

export default LayoutContanierForm