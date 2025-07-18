import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="small" styles="rounded-sm"/>
      <Button title="medium" styles="rounded-md"/>
      <Button title="large" styles="rounded-full"/>
    </div>
  )
}
export default Landing