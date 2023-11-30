import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { JSONTemplate } from 'state/types/index';
import EmailEditor, {
  EditorRef,
  EmailEditorProps,
} from '../../components/EmailEditor';
import { useUpdateTemplate } from '../hooks/useUpdateTemplate';
import axios from 'axios';
import { EMAIL_TEMPLATE_KEY } from '../../constants/azure-function-keys';
import { API_BASE_URL } from '../../constants/api';
import toast from 'react-hot-toast';

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

const DesignEdit = (params: { template: any; templateId?: string }) => {
  const { template, templateId = 'c1be5fb2-98fd-48d6-9492-d7904ca0cd4d' } =
    params;
  const emailEditorRef = useRef<EditorRef | null>(null);

  const saveDesign = async () => {
    const unlayer = emailEditorRef.current?.editor;
    if (unlayer) {
      unlayer.saveDesign(async (design: any) => {
        console.log('saveDesign', design);
        try {
          const response = await axios.put(
            `${API_BASE_URL}/upload-email-template?code=${EMAIL_TEMPLATE_KEY}&id=${templateId}`,
            design
          );
          toast.success('Template has been successfully saved.');
        } catch (error) {
          console.error('Error saving design to API', error);
        }
      });
    }
  };

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;
    unlayer?.exportHtml((data) => {
      const { html } = data;
      alert('Output HTML has been logged in your developer console.');
    });
  };

  const onDesignLoad = (data: any) => {
    console.log('onDesignLoad', data);
  };

  const onLoad: EmailEditorProps['onLoad'] = (unlayer) => {
    //console.log('onLoad', unlayer);
    //unlayer.addEventListener('design:loaded', onDesignLoad);
    unlayer.loadDesign(template as JSONTemplate);
  };

  const onReady: EmailEditorProps['onReady'] = (unlayer) => {
    //console.log('onReady', unlayer);
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

      <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
    </Container>
  );
};

export default DesignEdit;
