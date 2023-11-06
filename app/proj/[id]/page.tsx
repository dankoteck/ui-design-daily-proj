import dynamic from "next/dynamic";

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params }: Props) {
  const { id } = params;

  const DynamicComponent = dynamic(() => import(`../../components/${id}`));

  return <DynamicComponent />;
}
