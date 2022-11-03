import LoginForm from "@components/LoginForm";

export default function Login() {
  return (
    <div className="flex flex-grow justify-center align-center">
      <div className="p-8 bg-white m-auto w-3/6 max-w-md drop-shadow-md rounded-lg">
        <LoginForm />
      </div>
    </div>
  );
}
