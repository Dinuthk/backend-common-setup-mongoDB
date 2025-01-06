import asyncHandler from '../middleware/asyncHandler.js';
import User from "../models/userModel.js";


// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
    res.send('auth user');
});

// @desc    Register user
// @route   POST /api/users
// @access  Public
const regUsers = asyncHandler(async (req, res) => {
    res.send('register user');
});

// @desc    LogOut user / clear cookie
// @route   POST /api/users/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res) => {
    res.send('logout user');
});

// @desc    Get User Profile
// @route   POST /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.send('get user profile');
});

// @desc    Update User Profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('Update user profile');
});

// @desc    Get User
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
    res.send('Get users');
});

// @desc    Get user by id
// @route   GET /api/users/:id
// @access  Private/Admin
const getUsersById = asyncHandler(async (req, res) => {
    res.send('Get user by id');
});

// @desc    Delete User
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
    res.send('delete users');
});

// @desc    Update User 
// @route   PUT /api/users/:id
// @access  Private
const updateUser = asyncHandler(async (req, res) => {
    res.send('Update user');
});

export { 
    authUser,
    regUsers,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUsersById,
    deleteUser,
    updateUser
 };