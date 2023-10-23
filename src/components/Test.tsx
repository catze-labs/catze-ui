import "../index.css";

export interface TestProps {
  foo: string;
}

export const Test = ({ foo }: TestProps) => {
  return (
    <div className="border-2 border-red-500 p-2 bg-gray-200">
      <p className="text-blue-600">Test : {foo}</p>
    </div>
  );
};