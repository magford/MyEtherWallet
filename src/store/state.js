import nodeList from '@/networks';
import darklist from '@/darklist/address-darklist.json';
import store from 'store';
import commonGenerator from '@/helpers/commonGenerator';
if (store.get('notifications') === undefined) store.set('notifications', {});

const gettingStartedDone =
  store.get('skipTutorial') !== undefined ? store.get('skipTutorial') : false;
const storedNetwork = store.get('network');
let network = nodeList['ETH'][0];

if (storedNetwork !== undefined) {
  network = storedNetwork;
  network.type = nodeList[storedNetwork.type.name][0].type;
}

if (!network.hasOwnProperty('config')) {
  network.config = commonGenerator(network);
}

const notifications =
  store.get('notifications') !== undefined ? store.get('notifications') : {};
const gasPrice =
  store.get('gasPrice') !== undefined ? store.get('gasPrice') : 41;
const customPaths =
  store.get('customPaths') !== undefined ? store.get('customPaths') : {};
const state = {
  account: {
    balance: 0,
    address: null,
    isHardware: false,
    identifier: ''
  },
  customPaths: customPaths,
  ens: null,
  Errors: {},
  ethDonationAddress: '0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D',
  gasPrice: gasPrice,
  Networks: nodeList,
  network: network,
  notifications: notifications,
  path: '',
  online: true,
  transactions: {},
  wallet: null,
  web3: {},
  sidemenuOpen: false,
  darklist: darklist,
  gettingStartedDone: gettingStartedDone,
  blockNumber: 0,
  linkQuery: {}
};

export default state;
