import React from 'react';

import user from 'user';
import data from 'data';
import friends from 'friends';
import transactions from 'transactions';

import Profile from '../components/Profile/Profile';

import Statistic from '../components/Statistics/Statistic';

import Friends from '../components/FriendList/Friends';

import Transactions from '../components/Transactions/Transactions';
import { Section } from '../components/App.styled';

export const App = () => {
  return (
    <Section>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistic title stats={data} />
      <Friends data={friends} />
      <Transactions data={transactions} />
    </Section>
  );
};

// { <div
//   style={{
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontSize: 40,
//     color: '#010101',
//   }}
// ></div>;}
