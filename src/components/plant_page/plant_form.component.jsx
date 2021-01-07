import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { connect } from "react-redux";
import { registerUser } from "../actions";
import styled from 'styled-components';
import * as Yup from 'yup';

