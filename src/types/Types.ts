
export type TData = {
   id: number,
   productName: string,
   price: number,
   category: string,
   desc: string,
   picture: any
}
export type TUserAuth = {
   id:number,
   name:string,
   isLogged: boolean
}
export type TPicture = Record<string,any> & {
   src: string;
}
export type TCategories = {
   categoryName: string,
   categoryPicture: TPicture
}
export type TShoppingCartState = {
   items: TData[]
   totalCount: number
}