export default function Card(props) {
  return (
    <div className="border-[#ffffff] border-2 w-60 h-64 rounded-lg p-4">
      {props.children}
    </div>
  );
}
