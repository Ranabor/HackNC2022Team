import React, {useState, useEffect} from 'react';
import {Button, StyleSheet, Text, View, Image} from 'react-native';

function Scanner(codes, prices) {
  async function codeReader(receiptCodes) {
    tempStr = '';
    console.log(receiptCodes);
    const dpciList = [];
    for (i in receiptCodes.length - 1) {
      char = await receiptCodes.substring(i);
      if (isNaN(char) == false) {
        tempStr += char;
        if (tempStr.length == 9) {
          dpciList.push(tempStr);
          tempStr = '';
        }
      } else {
        tempStr = '';
      }
    }
    return dpciList;
  }
  const result = codeReader('057101346086134358');
  console.log(result);
  return result;
}

export default Scanner;
