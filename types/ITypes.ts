interface IItem {
  title: string;
  subtitle: string;
  features: IFeatures[];
  image: string;
}
interface IFeatures {
  img: string;
  text: string;
  value: string;
}
