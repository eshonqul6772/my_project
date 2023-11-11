import React from 'react';
import ModalBase, { ModalProps } from 'antd/lib/modal';

import * as Icons from 'assets/Icons';

import './Modal.scss';
import cls from './Modal.module.scss';

export interface IProps extends Omit<ModalProps, 'footer'> {
  buttons?: React.ReactNode[];
  children: React.ReactNode;
}

const Modal: React.FC<IProps> = ({
  children,
  destroyOnClose = true,
  maskClosable = true,
  centered = true,
  buttons,
  ...props
}) => (
  <ModalBase
    {...props}
    {...{ destroyOnClose, maskClosable, centered }}
    className={cls.wrapper}
    closeIcon={<Icons.Disk />}
    footer={null}
  >
    <div className={cls.content}>{children}</div>
    {!!buttons && <div className={cls.buttons}>{buttons}</div>}
  </ModalBase>
);

export default Modal;
