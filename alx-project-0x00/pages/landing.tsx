import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="flex flex-wrap gap-4">
        <Button title="Small Rounded" styles="px-4 py-1 text-sm bg-blue-500 text-white rounded-sm" />
        <Button title="Medium Rounded" styles="px-5 py-2 text-base bg-green-500 text-white rounded-md" />
        <Button title="Large Rounded" styles="px-6 py-3 text-lg bg-red-500 text-white rounded-full" />
      </div>
    </div>
  )
}
export default Landing