type ButtonProps = {
  children: React.ReactNode;
  big?: boolean;
};

function Button({ children, big }: ButtonProps) {
  return (
    <button
      className={
        !big
          ? "bg-accent text-base text-primary px-[.5em] py-[.25em] rounded-full hover:shadow-xl"
          : "bg-accent text-5xl text-primary px-[.5em] py-[.25em] rounded-full hover:shadow-2xl"
      }
    >
      {children}
    </button>
  );
}

export default Button;
