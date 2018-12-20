export interface FirmwareConfig {
  id: number;
  device_id: number;
  created_at: string;
  updated_at: string;
  encoder_enabled_x: number;
  encoder_enabled_y: number;
  encoder_enabled_z: number;
  encoder_invert_x: number;
  encoder_invert_y: number;
  encoder_invert_z: number;
  encoder_missed_steps_decay_x: number;
  encoder_missed_steps_decay_y: number;
  encoder_missed_steps_decay_z: number;
  encoder_missed_steps_max_x: number;
  encoder_missed_steps_max_y: number;
  encoder_missed_steps_max_z: number;
  encoder_scaling_x: number;
  encoder_scaling_y: number;
  encoder_scaling_z: number;
  encoder_type_x: number;
  encoder_type_y: number;
  encoder_type_z: number;
  encoder_use_for_pos_x: number;
  encoder_use_for_pos_y: number;
  encoder_use_for_pos_z: number;
  movement_axis_nr_steps_x: number;
  movement_axis_nr_steps_y: number;
  movement_axis_nr_steps_z: number;
  movement_enable_endpoints_x: number;
  movement_enable_endpoints_y: number;
  movement_enable_endpoints_z: number;
  movement_home_at_boot_x: number;
  movement_home_at_boot_y: number;
  movement_home_at_boot_z: number;
  movement_home_spd_x: number;
  movement_home_spd_y: number;
  movement_home_spd_z: number;
  movement_home_up_x: number;
  movement_home_up_y: number;
  movement_home_up_z: number;
  movement_invert_endpoints_x: number;
  movement_invert_endpoints_y: number;
  movement_invert_endpoints_z: number;
  movement_invert_motor_x: number;
  movement_invert_motor_y: number;
  movement_invert_motor_z: number;
  movement_keep_active_x: number;
  movement_keep_active_y: number;
  movement_keep_active_z: number;
  movement_max_spd_x: number;
  movement_max_spd_y: number;
  movement_max_spd_z: number;
  movement_min_spd_x: number;
  movement_min_spd_y: number;
  movement_min_spd_z: number;
  movement_secondary_motor_invert_x: number;
  movement_secondary_motor_x: number;
  movement_step_per_mm_x: number;
  movement_step_per_mm_y: number;
  movement_step_per_mm_z: number;
  movement_steps_acc_dec_x: number;
  movement_steps_acc_dec_y: number;
  movement_steps_acc_dec_z: number;
  movement_stop_at_home_x: number;
  movement_stop_at_home_y: number;
  movement_stop_at_home_z: number;
  movement_stop_at_max_x: number;
  movement_stop_at_max_y: number;
  movement_stop_at_max_z: number;
  movement_timeout_x: number;
  movement_timeout_y: number;
  movement_timeout_z: number;
  param_config_ok: number;
  param_e_stop_on_mov_err: number;
  param_mov_nr_retry: number;
  param_test: number;
  param_use_eeprom: number;
  param_version: number;
  pin_guard_1_active_state: number;
  pin_guard_1_pin_nr: number;
  pin_guard_1_time_out: number;
  pin_guard_2_active_state: number;
  pin_guard_2_pin_nr: number;
  pin_guard_2_time_out: number;
  pin_guard_3_active_state: number;
  pin_guard_3_pin_nr: number;
  pin_guard_3_time_out: number;
  pin_guard_4_active_state: number;
  pin_guard_4_pin_nr: number;
  pin_guard_4_time_out: number;
  pin_guard_5_active_state: number;
  pin_guard_5_pin_nr: number;
  pin_guard_5_time_out: number;
  api_migrated: boolean;
  movement_invert_2_endpoints_x: number;
  movement_invert_2_endpoints_y: number;
  movement_invert_2_endpoints_z: number;
}

export type NumberConfigKey = "id"
  | "device_id"
  | "encoder_enabled_x"
  | "encoder_enabled_y"
  | "encoder_enabled_z"
  | "encoder_invert_x"
  | "encoder_invert_y"
  | "encoder_invert_z"
  | "encoder_missed_steps_decay_x"
  | "encoder_missed_steps_decay_y"
  | "encoder_missed_steps_decay_z"
  | "encoder_missed_steps_max_x"
  | "encoder_missed_steps_max_y"
  | "encoder_missed_steps_max_z"
  | "encoder_scaling_x"
  | "encoder_scaling_y"
  | "encoder_scaling_z"
  | "encoder_type_x"
  | "encoder_type_y"
  | "encoder_type_z"
  | "encoder_use_for_pos_x"
  | "encoder_use_for_pos_y"
  | "encoder_use_for_pos_z"
  | "movement_axis_nr_steps_x"
  | "movement_axis_nr_steps_y"
  | "movement_axis_nr_steps_z"
  | "movement_enable_endpoints_x"
  | "movement_enable_endpoints_y"
  | "movement_enable_endpoints_z"
  | "movement_home_at_boot_x"
  | "movement_home_at_boot_y"
  | "movement_home_at_boot_z"
  | "movement_home_spd_x"
  | "movement_home_spd_y"
  | "movement_home_spd_z"
  | "movement_home_up_x"
  | "movement_home_up_y"
  | "movement_home_up_z"
  | "movement_invert_endpoints_x"
  | "movement_invert_endpoints_y"
  | "movement_invert_endpoints_z"
  | "movement_invert_motor_x"
  | "movement_invert_motor_y"
  | "movement_invert_motor_z"
  | "movement_keep_active_x"
  | "movement_keep_active_y"
  | "movement_keep_active_z"
  | "movement_max_spd_x"
  | "movement_max_spd_y"
  | "movement_max_spd_z"
  | "movement_min_spd_x"
  | "movement_min_spd_y"
  | "movement_min_spd_z"
  | "movement_secondary_motor_invert_x"
  | "movement_secondary_motor_x"
  | "movement_step_per_mm_x"
  | "movement_step_per_mm_y"
  | "movement_step_per_mm_z"
  | "movement_steps_acc_dec_x"
  | "movement_steps_acc_dec_y"
  | "movement_steps_acc_dec_z"
  | "movement_stop_at_home_x"
  | "movement_stop_at_home_y"
  | "movement_stop_at_home_z"
  | "movement_stop_at_max_x"
  | "movement_stop_at_max_y"
  | "movement_stop_at_max_z"
  | "movement_timeout_x"
  | "movement_timeout_y"
  | "movement_timeout_z"
  | "param_config_ok"
  | "param_e_stop_on_mov_err"
  | "param_mov_nr_retry"
  | "param_test"
  | "param_use_eeprom"
  | "param_version"
  | "pin_guard_1_active_state"
  | "pin_guard_1_pin_nr"
  | "pin_guard_1_time_out"
  | "pin_guard_2_active_state"
  | "pin_guard_2_pin_nr"
  | "pin_guard_2_time_out"
  | "pin_guard_3_active_state"
  | "pin_guard_3_pin_nr"
  | "pin_guard_3_time_out"
  | "pin_guard_4_active_state"
  | "pin_guard_4_pin_nr"
  | "pin_guard_4_time_out"
  | "pin_guard_5_active_state"
  | "pin_guard_5_pin_nr"
  | "pin_guard_5_time_out"
  | "movement_invert_2_endpoints_x"
  | "movement_invert_2_endpoints_y"
  | "movement_invert_2_endpoints_z";

export type StringConfigKey = "created_at"
  | "updated_at";

export type BooleanConfigKey = "api_migrated";