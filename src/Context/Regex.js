export const validEmail=new RegExp(
    '[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
);

export const validPassword=new RegExp(
   '^(?=.*?[A-Z])(?=.*?[0-9]).{5,}$'
);