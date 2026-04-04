import * as React from 'react';
import { Html, Body, Head, Heading, Container, Preview, Text } from '@react-email/components';

interface LeadNotificationTemplateProps {
  name: string;
  email: string;
  type: string;
  details?: string;
}

export const LeadNotificationTemplate: React.FC<Readonly<LeadNotificationTemplateProps>> = ({
  name,
  email,
  type,
  details,
}) => (
  <Html>
    <Head />
    <Preview>New Lead: {name} ({type})</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Lead Received</Heading>
        <Text style={text}><strong>Name:</strong> {name}</Text>
        <Text style={text}><strong>Email:</strong> {email}</Text>
        <Text style={text}><strong>Type:</strong> {type}</Text>
        
        {details && (
          <>
            <Text style={text}><strong>Details:</strong></Text>
            <Text style={text}>{details}</Text>
          </>
        )}
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '"Inter", "Helvetica", Arial, sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '40px',
  margin: '0 0 20px',
};

const text = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 10px',
};
