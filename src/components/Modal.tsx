import * as React from 'react';

type Props = {};
type State = {
  open: boolean;
};

/**
 * @doc 사용처에서 클래스 정적 메소드를 사용하여 모달을 명령형으로 관리
 */
export class Modal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  // 사용처에서 ref를 등록할 대상
  static _ref: Modal | null = null;

  // 사용처에서 ref를 등록할 정적 메서드
  static setRef(ref: Modal | null = null) {
    Modal._ref = ref;
  }

  static show() {
    Modal.show();
  }

  static toggle() {
    Modal.toggle();
  }

  show() {
    this.setState({ open: true });
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

  render(): React.ReactNode {
    const { open } = this.state;
    console.log(open);

    return <div>{open ? <div>열렸습니다.</div> : null}</div>;
  }
}
