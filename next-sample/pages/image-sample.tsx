import { NextPage } from 'next';
import Image from 'next/image';
// 画像ファイルをインポートする
import sampleImage from '../public/images/sample.jpeg';

const ImageSample: NextPage<void> = (props) => {
  return (
    <div>
      <h1>画像表示の比較</h1>
      <p>imgタグで表示した場合</p>
      {/**通常のimgタグを使用して画像を表示 */}
      <img src="/images/sample.jpeg" />
      <p>Imageコンポーネントを使用して表示</p>
      {/**Imageコンポーネントを使用して表示 */}
      {/**パスを指定する代わりに、インポートした画像を指定 */}
      <Image src={sampleImage} />
      <p>Imageで表示した場合は事前に描画エリアが確保される</p>
    </div>
  );
};

export default ImageSample;
