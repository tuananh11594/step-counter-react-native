//
//  PedometerManager.m
//  walker
//
//  Created by Tuan Anh on 8/1/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
//#import <CoreMotion/CoreMotion.h>

@interface RCT_EXTERN_MODULE(PedometerModule, NSObject)
  RCT_EXTERN_METHOD(startCountingSteps)
  RCT_EXTERN_METHOD(onStart)
  RCT_EXTERN_METHOD(onStop)
  RCT_EXTERN_METHOD(testNativeModule:(RCTResponseSenderBlock) callback)
  RCT_EXTERN_METHOD(testEvent:(NSString *)evenName)
@end

