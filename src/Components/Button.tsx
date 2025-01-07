type ButtonProps = {
  children: React.ReactNode;
  big?: boolean;
  event?: React.MouseEventHandler<HTMLButtonElement>;
};

function Button({ children, big, event }: ButtonProps) {
  if (!event)
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
  if (event !== undefined)
    return (
      <button
        onClick={event}
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
