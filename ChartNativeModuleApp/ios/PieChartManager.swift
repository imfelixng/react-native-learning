//
//  PieChartManager.swift
//  ChartNativeModuleApp
//
//  Created by Nguyen Quang An on 5/25/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(PieChartManager)
class PieChartManager: RCTViewManager {
  override func view() -> UIView! {
    return PieChartView(frame: .zero)
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
