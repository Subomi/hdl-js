/**
 * The MIT License (MIT)
 * Copyright (c) 2017-present Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

'use strict';

/**
 * Converts a number to signed 16-bit integer.
 */
function int16(v) {
  if (typeof v === 'string') {
    v = Number.parseInt(v, 2);
  }

  return (v << 16) >> 16;
}

/**
 * Converts a number to unsigned 16-bit integer.
 */
function uint16(v) {
  return v & 0xFFFF;
}

module.exports = {
  int16,
  uint16,
};