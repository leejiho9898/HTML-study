import { Request, Response } from "express";
import Board from "../models/board";

// 게시판 생성
export const create = async (req, res) => {
  const { name, cafeId } = req.body;
  //  const { cafeId } = req.params;

  try {
    const boards = new Board({ name, cafe: cafeId });
    const exist = boards.find((f) => f.name === name);
    if (exist) {
      return res.status(409).json({
        success: false,
        message: "해당 게시판이 이미 존재합니다.",
      });
    }
    await boards.save();

    return res.status(201).json({
      success: true,
      boards,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

export const readBoardList = async (req, res) => {
  const { cafeId } = req.params;
  try {
    const boards = await Board.find({
      cafe: cafeId,
    });
    return res.status(200).json({
      success: true,
      boards,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      e,
    });
  }
};

export const deleteBoard = async (req, res) => {
    const { cafeId, boardId } = req.params;
    try {
      const board = await Board.findOneAndDelete({
        _id: boardId,
        cafe: cafeId,
      });
  
      if (!board) {
        return res.status(400).json({
          success: false,
          message: "해당 게시판이 존재하지 않습니다",
        });
      }
  
      const boards = await Board.find({ cafe: cafeId });
  
      return res.status(200).json({
        success: true,
        boards,
      });
    } catch (e) {
      return res.status(500).json({
        success: false,
        e,
      });
    }
  };