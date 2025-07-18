import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="flex flex-wrap gap-4">
        <Button title="Small" styles="px-4 py-1 text-sm bg-blue-500 text-white rounded-sm" />
        <Button title="Medium" styles="px-5 py-2 text-base bg-green-500 text-white rounded-md" />
        <Button title="Large" styles="px-6 py-3 text-lg bg-red-500 text-white rounded-full" />
        <Button title="Extra" styles="px-5 py-2 text-base bg-purple-500 text-white rounded-lg" />
      </div>
    </div>
  )
}
export default Landing