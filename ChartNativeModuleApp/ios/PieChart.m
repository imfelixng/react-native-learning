//
//  “PieChart”.m
//  ChartNativeModuleApp
//
//  Created by Nguyen Quang An on 5/25/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "React/RCTViewManager.h"

@interface RCT_EXTERN_MODULE(PieChartManager, RCTViewManager)
  RCT_EXPORT_VIEW_PROPERTY(data, NSArray)
  RCT_EXPORT_VIEW_PROPERTY(strokeColor, UIColor)
  RCT_EXPORT_VIEW_PROPERTY(strokeWidth, CGFloat)
@end
