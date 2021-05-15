import React, { useState } from 'react';
import { Input, Modal, message as AntdMessage } from 'antd'
import { useMutation } from 'react-query';
import { addMessage } from 'src/fetch';
import './index.less'
import CocoIcon from 'src/components/WhaleIcon';

const { TextArea } = Input

interface HeaderProps {
  total: number
  refetch?: Function
}

const Header = ({ total, refetch }: HeaderProps) => {

  const [messageContent, setMessageContent] = useState('')
  const [visible, setVisible] = useState(false)
  
  const { mutate: fetchAddMessage } = useMutation<any>(
    ['addMessage', {  messageContent }],
    () => addMessage({  messageContent }),
    {
      onSuccess: ({ data }) => {
        const { flag, message } = data
        if (flag) {
          AntdMessage.success(message)
          refetch && refetch()
          handleHideModal()
        } else {
          AntdMessage.error(message)
        }
      },
    },
  )

  const handleSubmit = () => fetchAddMessage()

  const handleShowModal = () => {
    setTimeout(() => {
      setVisible(true)
    }, 300)
  }

  const handleHideModal = () => {
    setVisible(false)
    setMessageContent('')
  }

  return (
    <div className="archive-header-area">
      <div className="archive-header">
        <div className="archive-header-topic">
          <div>
            <CocoIcon type='icon-quotesDown' />
          </div>
          <div>
            <p>人的平均寿命77岁，一共28105天，67w小时，4047w分钟，24亿秒左右，这10秒你在读这段话，这10秒你属于我。</p>
          </div>
          <div>
            <CocoIcon type='icon-quotesUp' />
          </div>
        </div>
        <div className="archive-header-submit">
          <button onClick={handleShowModal}>给我留言</button>
        </div>
        <div className="archive-header-num">
          <p>已有 {total} 个友链</p>
        </div>
      </div>
      <Modal
        visible={visible}
        title="给站主留言，可以在留言中留下联系方式哦"
        onOk={handleSubmit}
        onCancel={handleHideModal}
      >
        <TextArea
          value={messageContent}
          onChange={({ target: { value } }) => setMessageContent(value)}
        />
      </Modal>
    </div>
  );
}

export default Header