import FormSignIn from "../organisms/FormSignIn";
function SignIn() {
  return (
    <form className="w-full h-screen fixed backdrop-blur-lg bg-black/50 z-[99] flex flex-col justify-center">
      <FormSignIn />
    </form>
  );
}

export default SignIn;