import React, { useState } from 'react';
import { Image, Button } from 'antd';
import axios from 'axios';

type ResType = {
  data: { file :string }
};

export default function Page() {
  const [source, setSource] = useState('');
  const [loading, setLoading] = useState(false);

  const onFinish = async () => {
    setLoading(true);
    const res: ResType = await axios.get('https://aws.random.cat/meow');
    setSource(res.data.file);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <div style={{ padding: 16 }}>
        <Button
          type="primary"
          size="large"
          loading={loading}
          htmlType="submit"
          onClick={onFinish}
        >
          CAT
        </Button>
      </div>
      <Image src={source} width="30%" />
    </>
  );
}
