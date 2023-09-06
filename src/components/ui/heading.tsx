export const H1 = (props: { children: React.ReactNode }) => {
  return <h1>{props.children}</h1>;
};

export const H2 = (props: { children: React.ReactNode }) => {
  return <h2 className='font-black text-2xl mx-4'>{props.children}</h2>;
};

export const H3 = (props: { children: React.ReactNode }) => {
  return <h3 className='font-semibold text-xl'>{props.children}</h3>;
};

export const H4 = (props: { children: React.ReactNode }) => {
  return <h4>{props.children}</h4>;
};

export const H5 = (props: { children: React.ReactNode }) => {
  return <h5>{props.children}</h5>;
};

export const H6 = (props: { children: React.ReactNode }) => {
  return <h6>{props.children}</h6>;
};
