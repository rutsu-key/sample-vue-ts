import { ItunesTypes } from "@/types/ItunesTypesInterface";

export const itunesSearch = async (search: string): Promise<ItunesTypes> =>
  await fetch(
    `https://itunes.apple.com/search?term=${search}&entity=album`
  ).then((val) => val.json());
