type TCardButton = {
  title: string;
  desc: string;
  onClick: () => void;
};

function CardButton(props: TCardButton) {
  return (
    <div
      onClick={props.onClick}
      className="border border-slate-300 rounded-md p-6 text-left transition-colors hover:border-slate-600 cursor-pointer"
    >
      <p className="text-lg text-gray-950 font-medium">{props.title}</p>
      <p className="text-sm leading-[22px] text-gray-600">{props.desc}</p>
    </div>
  );
}

export default CardButton;
