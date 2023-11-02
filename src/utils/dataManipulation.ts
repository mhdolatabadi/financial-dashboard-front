import { User } from '../models/user'
import { deleteRequest, getRequest, postRequest, putRequest } from './request'

export function getUserWithUsername(username: string) {
  return getRequest(`/user/username/${username}`, {
    headers: { Authorization: '' },
  })
}

export function getUserWithId(id: string) {
  return getRequest(`/user/${id}`, {
    headers: { Authorization: '' },
  })
}

export function getAllUsers() {
  return getRequest('/user', {
    headers: { Authorization: '' },
  })
}

export function createUser(username: string, password: string) {
  return postRequest(
    '/user',
    {
      username,
      password,
    },
    { headers: { Authorization: '' } },
  )
}

export function updateUserInformation(id: string, user: User) {
  return putRequest(`/user/${id}`, user, { headers: { Authorization: '' } })
}

export function deleteUser(id: string) {
  return deleteRequest(`/user/${id}`, { headers: { Authorization: '' } })
}

export function loginUser(username: string, password: string) {
  return postRequest('/auth/login', { username, password })
}

export function getUserTransactions(userId: string) {
  return getRequest(`/transaction/${userId}`, {
    headers: { Authorization: '' },
  })
}

export function submitTransaction(transaction: unknown) {
  return postRequest('/transaction', transaction, {
    headers: { Authorization: '' },
  })
}

export function getUserProfits(userId: string) {
  return getRequest(`/profit/${userId}`, {
    headers: { Authorization: '' },
  })
}

export function submitProfit(profit: unknown) {
  return postRequest('/profit', profit, {
    headers: { Authorization: '' },
  })
}
