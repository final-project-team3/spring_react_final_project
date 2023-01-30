package com.fproject.project_team3.dto.gwak;

import lombok.Data;

@Data
public class TFileDto {
  private int idx;
  private int boardIdx;
  private String originalFileName;
  private String storedFilePath;
  private long fileSize;
  private String createId;
  private String createDt;
}

