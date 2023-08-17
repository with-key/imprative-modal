import * as React from 'react';
import { Dialog } from '@headlessui/react';
import { styled } from '@stitches/react';

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

    return (
      <Dialog open={open} onClose={() => this.setState({ open: false })} static={false}>
        <Backdrop />
        <Panel>
          <Dialog.Title>404 Error!</Dialog.Title>
          <Dialog.Description>This will permanently deactivate your account</Dialog.Description>

          <p>
            Are you sure you want to deactivate your account? All of your data will be permanently removed. This action
            cannot be undone.
          </p>

          <button onClick={() => this.setState({ open: false })}>Deactivate</button>
          <button onClick={() => this.setState({ open: false })}>Cancel</button>
        </Panel>
      </Dialog>
    );
  }
}

/**
 * Styled Panel
 */
const Panel = styled(Dialog.Panel, {
  position: 'relative',
  top: 400,
  left: '50%',
  transform: 'translate(-50%,-50%)',
  backgroundColor: '#fff',
  width: 500,
  height: 300,
  borderRadius: 10,
  padding: 20,
  boxSizing: 'border-box',
});

const Backdrop = styled('div', {
  width: '100%',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  backgroundColor: '#000',
  opacity: 0.3,
});
