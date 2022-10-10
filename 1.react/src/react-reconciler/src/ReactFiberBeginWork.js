import logger from 'shared/logger';
import { HostComponent, HostRoot, HostText } from './ReactWorkTags';

function updateHostRoot(current, workInProgress) {
  //需要知道它的子虚拟DOM，知道它的儿子的虚拟DOM信息
  processUpdateQueue(workInProgress);//workInProgress.memoizedState={ element }
  const nextState = workInProgress.memoizedState;
  const nextChildren = nextState.element;
  //协调子节点 DOM-DIFF算法
  reconcileChildren(current, workInProgress, nextChildren);
  return workInProgress.child;//{tag:5,type:'h1'}
}
function updateHostComponent(current, workInProgress) {

}
/**
 * 目标是根据新虚拟DOM构建新的fiber子链表 child .sibling
 * @param {*} current 老fiber
 * @param {*} workInProgress 新的fiber
 * @returns 
 */
export function beginWork(current, workInProgress) {
  logger('beginWork', workInProgress);
  switch (workInProgress.tag) {
    case HostRoot:
      return updateHostRoot(current, workInProgress);
    case HostComponent:
      return updateHostComponent(current, workInProgress);
    case HostText:
      return null;
    default:
      return null;
  }
}