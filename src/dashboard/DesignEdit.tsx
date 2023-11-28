import React, { useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import EmailEditor, { EditorRef, EmailEditorProps } from '../email-editor'; // use react-email-editor instead

import template from './template-47.json';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`;

const Bar = styled.div`
  flex: 1;
  color: #000;
  padding: 10px;
  display: flex;
  max-height: 40px;

  h1 {
    flex: 1;
    font-size: 16px;
    text-align: left;
  }

  button {
    flex: 1;
    padding: 10px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    border: 0px;
    max-width: 150px;
    cursor: pointer;
    border-radius: 8px;
    &.primary {
      background-color: #68707f;
    }
    &.secondary {
      background-color: transparent;
      border: 1px solid #68707f;
      color: #68707f;
    }
  }

  a {
    //flex: 1;
    padding: 10px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    color: #68707f;
    border: 0px;
    cursor: pointer;
    text-align: right;
    text-decoration: none;
    line-height: 160%;
  }
`;

const DesignEdit = () => {
  const emailEditorRef = useRef<EditorRef | null>(null);

  const saveDesign = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.saveDesign((design) => {
      console.log('saveDesign', design);
      alert('Design JSON has been logged in your developer console.');
    });
  };

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      const { html } = data;
      console.log('exportHtml', html);
      alert('Output HTML has been logged in your developer console.');
    });
  };

  const onDesignLoad = (data) => {
    console.log('onDesignLoad', data);
  };

  const onLoad: EmailEditorProps['onLoad'] = (unlayer) => {
    console.log('onLoad', unlayer);
    //unlayer.addEventListener('design:loaded', onDesignLoad);
    unlayer.loadDesign(template);
  };

  const onReady: EmailEditorProps['onReady'] = (unlayer) => {
    console.log('onReady', unlayer);
  };

  return (
    <Container>
      <Bar>
        <h1>Template #47</h1>

        <Link to={`/dashboard`}>Dashboard</Link>
        <button onClick={saveDesign} className="secondary">
          Finish Later
        </button>
        <button onClick={exportHtml} className="primary">
          Save & Continue
        </button>
      </Bar>

      {/* <EmailEditor ref={emailEditorRef} /> */}
      <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
    </Container>
  );
};

export default DesignEdit;
