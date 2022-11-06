import React, {useState, useEffect} from 'react';
import {Button, StyleSheet, Text, View, Image} from 'react-native';

const Scanner = async (codes, prices) => {
  codeReader = receiptCodes => {
    tempStr = '';
    dpciList = [];
    for (char in receiptCodes) {
      if (isNaN(char) == false) {
        tempStr += char;
        if (tempStr.length == 9) {
          dpciList.push(tempStr);
          tempStr = '';
        } else {
          tempStr = '';
        }
      }
    }
    return dpciList;
  };
  return codeReader('057101346086134358');
};

export default Scanner;
