// import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledButton } from '../components/StyledButton';
// import { action } from '@storybook/addon-actions';

// ファイル内のstoryの設定（メタデータオブジェクト）
export default {
  // グループ名
  title: 'StyledButton',
  // 使用するコンポーネント
  component: StyledButton,
  // onClickが呼ばれた時にclickedというアクションを出力する
  //   argTypes: { onClick: { action: 'clicked' } },
  argTypes: {
    // propsに渡すvariantをStorybookから変更できるように追加
    variant: {
      // ラジオボタンで設定できるように指定
      control: { type: 'radio' },
      options: ['primary', 'success', 'transparent'],
    },
    // propsに渡すchildrenをStorybookから変更できるように追加
    children: {
      // テキストボックスで入力できるように指定
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof StyledButton>;

// テンプレートコンポーネントを実装
// Storybookから渡されたpropsをそのままButtonに渡す
const Template: ComponentStory <typeOf StyledButton > = (args) => <StyledButton {...args} />

// bindを呼び出しStoryを作成
export const TemplateTest = Template.bind({})

// デフォルトのpropsを設定する
TemplateTest.args = {
    variant: 'primary',
    children: 'primary'
}

// incrementという名前でactionを出力するための関数を作る
const incrementAction = action('increment');

export const Primary = (props) => {
  const [count, setCount] = useState(0);
  const onClick = (e: React.MouseEvent) => {
    // 現在のカウントを渡して、Actionを呼ぶ
    incrementAction(e, count);
    setCount((c) => c + 1);
  };
  return (
    <StyledButton {...props} variant="primary" onClick={onClick}>
      Count: {count}
    </StyledButton>
  );
};

export const Success = (props) => {
  return (
    <StyledButton {...props} variant="success">
      Success
    </StyledButton>
  );
};

export const Transparent = (props) => {
  return (
    <StyledButton {...props} variant="transparent">
      Transparent
    </StyledButton>
  );
};
